import React, { Component } from 'react';

export default class Customer extends Component {
  render() {
    return (
      <div>
        <CustomerProfile
          id={this.props.id}
          img={this.props.img}
          name={this.props.name}
        />
        <CustomerInfo
          birthday={this.props.birthday}
          gender={this.props.gender}
          job={this.props.job}
        />
      </div>
    );
  }
}

class CustomerProfile extends Component {
  render() {
    return (
      <div>
        <img src={this.props.img} alt="profile" />
        <h2>
          {this.props.name}({this.props.id})
        </h2>
      </div>
    );
  }
}

class CustomerInfo extends Component {
  render() {
    return (
      <div>
        <p>{this.props.birthday}</p>
        <p>{this.props.gender}</p>
        <p>{this.props.job}</p>
      </div>
    );
  }
}
