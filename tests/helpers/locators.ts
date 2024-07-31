//Test Login Page Locators
export const getTestLoginPageLocators = (page: any) => {
    return {
        headerLabel: () => {
            return page.getByRole('heading', { name: 'Test login' })
        },
        descriptionLabel: () => {
            return page.getByText('This is a simple Login page. Students can use this page to practice writing simple positive and negative LogIn tests. Login functionality is something that most of the test automation engineers need to automate.')
        },
        instructions1Label: () => {
            return page.getByText('Use next credentials to execute Login:')
        },
        instructions2Label: () => {
            return page.getByText('Username: student')
        },
        instructions3Label: () => {
            return page.getByText('Password: Password123')
        },
        usernameLabel: () => {
            return page.getByText('Username', { exact: true })
        },
        usernameInput: () => {
            return page.locator('id=username')
        },
        passwordLabel: () => {
            return page.getByText('Password', { exact: true })
        },
        passwordInput: () => {
            return page.locator('id=password')
        },
        submitButton: () => {
            return page.getByRole('button', { name: 'Submit' })
        },
    }
}

//Successful Login Page Locators
export const getSuccessfulLoginPageLocators = (page: any) => {
    return {
        headerLabel: () => {
            return page.getByRole('heading', { name: 'Logged In Successfully' })
        },
        descriptionLabel: () => {
            return page.getByText('Congratulations student. You successfully logged in!')
        },
        logoutButton: () => {
            return page.getByRole('link', { name: 'Log out' })
        },
    }
}