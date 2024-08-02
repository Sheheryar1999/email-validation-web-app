import smtplib
import dns.resolver
import streamlit as st
from concurrent.futures import ThreadPoolExecutor
import re

# Sample disposable email domains and role-based email prefixes
DISPOSABLE_EMAIL_DOMAINS = ['tempmail.com', '10minutemail.com', 'mailinator.com']
ROLE_BASED_EMAIL_PREFIXES = ['info', 'support', 'admin', 'sales']
smtp_cache = {}

# Email validation functions
def is_valid_email(email):
    regex = r'^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$'
    return re.match(regex, email) is not None

def has_valid_mx(domain):
    try:
        records = dns.resolver.resolve(domain, 'MX', lifetime=5)
        return len(records) > 0
    except dns.resolver.NoAnswer:
        return False

def is_disposable_email(email):
    domain = email.split('@')[1]
    return domain in DISPOSABLE_EMAIL_DOMAINS

def is_role_based_email(email):
    prefix = email.split('@')[0]
    return prefix in ROLE_BASED_EMAIL_PREFIXES

def smtp_check(email):
    if email in smtp_cache:
        return smtp_cache[email]
    
    domain = email.split('@')[1]
    try:
        mx_records = dns.resolver.resolve(domain, 'MX', lifetime=5)
        mx_record = str(mx_records[0].exchange)
        server = smtplib.SMTP(timeout=10)  # Increased timeout for reliability
        server.connect(mx_record)
        server.helo(server.local_hostname)
        server.mail('exxdandy@gmail.com')
        code, message = server.rcpt(email)
        server.quit()
        result = code == 250
        smtp_cache[email] = result
        return result
    except (dns.resolver.NoAnswer, dns.resolver.NXDOMAIN, dns.resolver.Timeout) as dns_err:
        return f"DNS error: {dns_err}"
    except (smtplib.SMTPConnectError, smtplib.SMTPServerDisconnected) as smtp_err:
        return f"SMTP connection error: {smtp_err}"
    except (OSError) as os_err:
        return f"Network error: {os_err}"

def is_catch_all(domain):
    test_email = f"nonexistentaddress@{domain}"
    try:
        mx_records = dns.resolver.resolve(domain, 'MX', lifetime=5)
        mx_record = str(mx_records[0].exchange)
        server = smtplib.SMTP(timeout=10)  # Increased timeout for reliability
        server.connect(mx_record)
        server.helo(server.local_hostname)
        server.mail('exxdandy@gmail.com')
        code, message = server.rcpt(test_email)
        server.quit()
        return code == 250
    except smtplib.SMTPServerDisconnected as e:
        return False  # Server disconnection may indicate catch-all behavior
    except (dns.resolver.NoAnswer, dns.resolver.NXDOMAIN, dns.resolver.Timeout) as dns_err:
        return False  # DNS issues should return False for catch-all check
    except smtplib.SMTPRecipientsRefused:
        return False  # If recipient is refused, it's not a catch-all
    except smtplib.SMTPSenderRefused:
        return False  # If sender is refused, it's not a catch-all
    except Exception as e:
        return False  # For any other exceptions, return False

# Streamlit app
st.title('Email Verification App')

email = st.text_input('Enter email address')

if st.button('Check Syntax'):
    result = is_valid_email(email)
    st.write('Valid Syntax' if result else 'Invalid Syntax')

if st.button('Check MX Records'):
    domain = email.split('@')[1] if '@' in email else ''
    result = has_valid_mx(domain)
    st.write('Valid MX Records' if result else 'Invalid MX Records')

if st.button('Check Disposable Email'):
    result = is_disposable_email(email)
    st.write('Disposable Email' if result else 'Not a Disposable Email')

if st.button('Check Role-Based Email'):
    result = is_role_based_email(email)
    st.write('Role-Based Email' if result else 'Not a Role-Based Email')

if st.button('Check SMTP'):
    result = smtp_check(email)
    st.write('Valid Email' if result == True else f'Invalid Email: {result}')

if st.button('Check Catch-All Domain'):
    domain = email.split('@')[1] if '@' in email else ''
    result = is_catch_all(domain)
    st.write('Catch-All Domain' if result else 'Not a Catch-All Domain')
