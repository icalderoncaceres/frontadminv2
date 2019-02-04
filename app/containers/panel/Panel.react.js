import React from 'react';
import Nav from '../../components/panel/Nav.react';
import Left from '../../components/panel/Left.react';
import Center from '../../components/panel/Center.react';
class Panel extends React.Component{
    constructor(){
        super();
    }

    render(){
        return(
            <div>
                <Nav />
                <section className="container-fluid">
				    <div className="columns is-table is-tablet is-desktop" style={{marginTop:5}}>
				      <div className="column is-2" style={{backgroundColor:"#2A3F54",minHeight:1000}}>
				      		<Left />
				      </div>
				      <div className="column is-10-desktop is-11-tablet">
				      		<Center />
				      </div>
				    </div>
				</section>                
            </div>
        );
    }
}

export default Panel;