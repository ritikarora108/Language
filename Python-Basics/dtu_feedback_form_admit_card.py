from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.chrome.service import Service
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.support.ui import WebDriverWait, Select
from selenium.webdriver.support import expected_conditions as EC
import time

# Specify the path to ChromeDriver
chromedriver_path = r"path_to_chrome_driver"

# Set up the ChromeDriver service
service = Service(chromedriver_path)
driver = webdriver.Chrome(service=service)

# Open the website
driver.get('registration_website_link')

# Wait for the login page to load
WebDriverWait(driver, 20).until(EC.presence_of_element_located((By.NAME, "roll_no")))

# Enter credentials
roll_no = driver.find_element(By.NAME, "roll_no")  # Locate by 'name' attribute
password = driver.find_element(By.NAME, "password")  # Locate by 'name' attribute

roll_no.send_keys("your roll_no")
password.send_keys("your password")

# Submit the login form
login_button = WebDriverWait(driver, 20).until(
    EC.element_to_be_clickable((By.CSS_SELECTOR, "button.btn.btn-primary"))
)
login_button.click()

# Open the website
driver.get('link_to_admit_card_page')

# Wait for the page to navigate after login
# WebDriverWait(driver, 20).until(EC.presence_of_element_located((By.TAG_NAME, "select")))

# Locate all dropdown elements
dropdowns = driver.find_elements(By.TAG_NAME, "select")

# Select "4" in all dropdowns
for dropdown in dropdowns:
    select = Select(dropdown)
    select.select_by_value("4")  # Assumes "4" is the value of the option

# Now, fill in the sections and faculty names
# List of the section and faculty names for each subject in the order they appear in the HTML
sections = {
    "IT401": "IT-C",
    "IT403": "IT-C",
    "IT429": "E2",
    "IT407": "E5",
    "IT409": "E8",
    "MOOC401": "None",
    "MOOC403": "None",
}

faculty_names = {
    "IT401": "Bindu Verma",
    "IT403": "Anamika Chauhan",
    "IT429": "Ankit Deswal",
    "IT407": "Ankit Deswal",
    "IT409": "Geetanjali Bhola",
    "MOOC401": "Priyanka Meel",
    "MOOC403": "Priyanka Meel",
}

# Loop through each subject, section, and faculty input and set the values
for subject_code in sections:
    section_input = driver.find_element(By.NAME, f"subjects[{subject_code}][section]")
    faculty_input = driver.find_element(By.NAME, f"subjects[{subject_code}][faculty]")

    # Set the section value (assuming 'A', 'B', etc. are valid values)
    section_input.send_keys(sections[subject_code])

    # Set the faculty value (assuming faculty names are valid)
    faculty_input.send_keys(faculty_names[subject_code])

# You can add more interactions if necessary, like clicking 'Submit' or other buttons

# Review the filled form
time.sleep(1000)