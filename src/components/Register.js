import React, {Component} from 'react'
import {register} from './UserFunction'

class Register extends Component{
    constructor(){
        super()
        this.state={
            firstName:'',
            lastName:'',
            email:'',
            passsword:'',
        }
        this.onChange= this.onChange.bind(this)
        this.onSubmit= this.onSubmit.bind(this)
    }

    onChange(e){
        this.setState({[e.target.name]:e.target.value})
    }
    onSubmit(e){
        e.preventdefault()
        const user={
            firstName:this.state.firstName,
            lastName:this.state.lastName,
            email:this.state.email,
            password:this.state.passsword
        }
        register(user).then(res=>{
            this.props.history.push('/login')
        })
    }

    render(){
        return(
            <div className='container'>
                <div className='row'>
                    <div className='col-md-6 mt-5 mx-auto'>
                        <form noValidate onSubmit={this.onSubmit}>
                            <h1 className='h3 mb-3 font-weight-normal'>Please Sign In</h1>
                            <div className='form-group'>
                                <label htmlFor='firstName'>First Name</label>
                                <input type='text'
                                className='form-control'
                                name='firstName'
                                placeholder='Enter First Name'
                                value={this.state.firstName}
                                onChange={this.onChange} />
                            </div>
                            <div className='form-group'>
                                <label htmlFor='lastName'>Last Name</label>
                                <input type='text'
                                className='form-control'
                                name='lastName'
                                placeholder='Enter Last Name'
                                value={this.state.lastName}
                                onChange={this.onChange} />
                            </div>
                            <div className='form-group'>
                                <label htmlFor='email'>Email Address</label>
                                <input type='email'
                                className='form-control'
                                name='email'
                                placeholder='Enter Email'
                                value={this.state.email}
                                onChange={this.onChange} />
                            </div>
                            <div className='form-group'>
                                <label htmlFor='password'>Password</label>
                                <input type='password'
                                className='form-control'
                                name='password'
                                placeholder='Enter Password'
                                value={this.state.password}
                                onChange={this.onChange} />
                            </div>
                             <button type='button' className='btn btn-lg btn-primary btn-block'>
                                 Register
                             </button>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default Register