import React from 'react';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import { auth, createUserProfileDocument } from '../../firebase/firebase.utils';

import './sign-up.styles.scss'

class SignUp extends React.Component {
    constructor() {
        super()

        this.state =  {
            displayName: '',
            email: '',
            password: '',
            confirmPassword: ''
          }
    }
    
    handleSubmit = async event => {
        event.preventDefault()

        const { displayName, email, password, confirmPassword } =  this.state;
        const minPasswordLength = 6;

        if(password !== confirmPassword) {
            alert("Passwords don't match")
            return;
        }

        if(password.length < minPasswordLength ) {
          alert("Password should be at least 6 characters")
          return;
        }

        try {
            const { user } = await auth.createUserWithEmailAndPassword(
                email,
                password
            );

            await createUserProfileDocument(user, { displayName });

            this.setState =  {
                displayName: '',
                email: '',
                password: '',
                confirmPassword: ''
            }            

        } catch (error) {
            console.error(error); 
        }
    };

    handleChange = event => {
        const { value, name } = event.target

        this.setState({ [name]: value })
    }
    
    render() {
      const { displayName, email, password, confirmPassword } = this.state;
        return(
            <div className='sign-up'>
                <h2 className='title'>I do not have an account</h2>
                <span>Sign up with your email and password</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput 
                        type='text' 
                        name='displayName' 
                        handleChange={this.handleChange}
                        value={displayName} 
                        label='Display Name'
                        required />
                    <FormInput 
                        type='email' 
                        name='email' 
                        handleChange={this.handleChange}
                        value={email} 
                        label='Email'
                        required />
                    <FormInput 
                        type='password' 
                        name='password' 
                        handleChange={this.handleChange}
                        value={password} 
                        label='Password'
                        required />
                    <FormInput 
                        type='password' 
                        name='confirmPassword' 
                        handleChange={this.handleChange}
                        value={confirmPassword} 
                        label='Confirm Password'
                        required />

                    <div className='buttons'>
                        <CustomButton type='submit'> Sign up </CustomButton>
                    </div>
                </form>
            </div>

        );
    }
}   

export default SignUp;
