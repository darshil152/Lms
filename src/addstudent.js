import React, { Component } from 'react'
import Layout from './layout'

export default class Addstudent extends Component {

    constructor(props) {
        super(props)

        this.state = {
            name: '',
            Email: '',
            cemail: '',
            pic: '',
            standard: '',
            y: [],
            gender: '',
            pro: '',
        }
    }

    componentDidMount() {
        this.setState({ name: '', email: '', standard: '' })
    }

    onenamechange = (e) => {
        this.setState({ name: e.target.value })
    }
    onemailchange = (e) => {
        this.setState({ email: e.target.value })
    }
    oncemailchange = (e) => {
        this.setState({ cemail: e.target.value })
    }
    onpicchange = (e) => {
        var file = e.target.files[0];
        var reader = new FileReader();
        reader.onloadend = () => {
            // console.log('RESULT', reader.result)
            this.setState({ pic: reader.result })
        }
        reader.readAsDataURL(file);
    }
    onestdchange = (e) => {
        this.setState({ standard: e.target.value })
    }
    onGenderChange = (e) => {
        this.setState({ gender: e.target.value })
    }

    onproChange = (e) => {
        this.setState({ pro: e.target.value })
    }


    click = (e) => {

        let y = localStorage.getItem("students") ? JSON.parse(localStorage.getItem('students')) : []

        if (y.length > 0) {
            let alreadexist = false
            if (this.state.email == this.state.cemail) {
                alreadexist = true
            }


            if (alreadexist) {
                y.push({
                    name: this.state.name,
                    email: this.state.email,
                    cemail: this.state.cemail,
                    pic: this.state.pic,
                    standard: this.state.standard,
                    gender: this.state.gender,
                    pro: this.state.pro
                })
                localStorage.setItem("students", JSON.stringify(y))
                window.location.href = 'view-student'
            } else {
                alert('please match email')
            }
        } else {
            y.push({
                name: this.state.name,
                email: this.state.email,
                cemail: this.state.cemail,
                pic: this.state.pic,
                standard: this.state.standard,
                gender: this.state.gender,
                pro: this.state.pro
            })
            localStorage.setItem("students", JSON.stringify(y))
            window.location.href = 'view-student'
        }

    }


    render() {
        return (
            <Layout>
                <div className='form'>
                    <div className="main">
                        <div>

                            <div className="form-outline mb-4 col-sm-6" >
                                <label className="form-label" htmlFor="form2Example1">Name:</label>
                                <input type="name" value={this.state.name} onChange={this.onenamechange} id="form2Example1" className="form-control" />
                            </div>

                            <div className="form-outline mb-4 col-sm-6" >
                                <label className="form-label" htmlFor="form2Example1">Email:</label>
                                <input type="email" value={this.state.email} onChange={this.onemailchange} id="form2Example1" className="form-control" />
                            </div>

                            <div className="form-outline mb-4 col-sm-6" >
                                <label className="form-label" htmlFor="form2Example1">Confirm Email:</label>
                                <input type="email" value={this.state.cemail} onChange={this.oncemailchange} id="form2Example1" className="form-control" />
                            </div>

                            <div className="form-outline mb-4 col-sm-6" >
                                <label className="form-label" htmlFor="form2Example1">Enter your profile pic:</label>
                                <input type="file" id="myFile" onChange={this.onpicchange} />
                            </div>


                            <div className="form-outline mb-4 col-sm-6">
                                <label className="form-label" htmlFor="form2Example2">Standard:</label>
                                <input type="number" value={this.state.standard} onChange={this.onestdchange} id="form2Example2" className="form-control" />
                            </div>

                            <div className='radio' onChange={this.onGenderChange}>
                                <input type="radio" name="gender" value="Male" />Male
                                <input type="radio" name="gender" value="Female" />Female<br></br>
                            </div>

                            <div className='checkbox'>
                                <label for="pros">Choose a Profession:</label>
                                <select name="pros" id="pros" onChange={this.onproChange} >
                                    <option value="Frontend">Frontend</option>
                                    <option value="backtend">backtend</option>
                                    <option value="Fullstack">Fullstack</option>
                                    <option value="Designer">Designer</option>
                                </select>
                            </div>

                            <div className="button">
                                <button onClick={this.click} className="btn btn-primary btn-block mb-4 text-justify">Sign in</button>
                            </div>
                        </div>
                    </div>

                </div>
            </Layout>
        )
    }
}
