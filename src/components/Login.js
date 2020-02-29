import React, {Component} from 'react'
import {login} from './UserFunction'

class Login extends Component{
    constructor(){
        super()
        this.state={
            email:'',
            passsword:'',
        }
        this.onChange= this.onChange.bind(this)
        this.onSubmit= this.onSubmit.bind(this)
    }

    onChange(e){
        this.state({[e.target.name]:e.target.value})
    }
    onSubmit(e){
        e.preventdefault()
        const User={
            email:this.state.email,
            password:this.state.passsword
        }
        Login(User).then(res=>{
            if(res){
                this.props.history.push('/profile')
            }
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
                                placeholder='Enter password'
                                value={this.state.password}
                                onChange={this.onChange} />
                            </div>
                             <button type='button' className='btn btn-lg btn-primary btn-block'>
                                 Sign In
                             </button>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default Login