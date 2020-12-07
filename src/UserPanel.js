import React from 'react'
import './userpanel.css'
import 'bootstrap/dist/css/bootstrap.min.css'
class Userpanel extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            type: 'admin',
            description: ''
        }
    }
    chnagefield(e){
        const target=e.target;
        const value=target.type==='checkbox'?target.checked:target.value;
        const name=target.name;
        this.setState({
            [name]:value
        })
    }
    submit(e){
        e.preventDefault();
        console.log(this.state);
    }
    render() {
        return (
            <div className="container">
                <form onSubmit={this.submit.bind(this)}>
                    <div className="form-group">
                        <label>Name:</label>
                        <input type='text' name="name" className="form-control" value={this.state.name} onChange={this.chnagefield.bind(this)} />
                    </div>
                    <div className="form-group">
                        <label>Type:</label>
                        <select value={this.state.type} name="type" className="form-control" onChange={this.chnagefield.bind(this)}>
                            <option value='admin'>admin</option>
                            <option value='user'>user</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label>description:</label><br />
                        <textarea value={this.state.description} name="description" onChange={this.chnagefield.bind(this)} />
                    </div>
                    <div className="form-group">
                        <button className="btn btn-primary">Send</button>
                    </div>
                    <div>
                        
                    </div>

                </form>
            </div>
        );
    }
}

export default Userpanel;