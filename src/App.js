import React, { Component } from 'react';
import './App.css';
import Customer from './components/Customer';

const customers = [
  {
    id: 1,
    img: 'https://placeimg.com/64/64/1',
    name: '김은우',
    birthday: '191203',
    gender: '남아',
    job: '어린이',
  },
  {
    id: 2,
    img: 'https://placeimg.com/64/64/2',
    name: '김동훈',
    birthday: '811019',
    gender: '남자',
    job: '대디',
  },
  {
    id: 3,
    img: 'https://placeimg.com/64/64/3',
    name: '문혜숙',
    birthday: '900701',
    gender: '여자',
    job: '마미',
  },
];

export default class App extends Component {
  render() {
    return (
      <div>
        {customers.map((c) => {
          return (
            <Customer
              key={c.id}
              id={c.id}
              img={c.img}
              name={c.name}
              birthday={c.birthday}
              gender={c.gender}
              job={c.job}
            />
          );
        })}
        {/* <Customer
          id={customers[0].id}
          img={customers[0].img}
          name={customers[0].name}
          birthday={customers[0].birthday}
          gender={customers[0].gender}
          job={customers[0].job}
        />
        <Customer
          id={customers[1].id}
          img={customers[1].img}
          name={customers[1].name}
          birthday={customers[1].birthday}
          gender={customers[1].gender}
          job={customers[1].job}
        />
        <Customer
          id={customers[2].id}
          img={customers[2].img}
          name={customers[2].name}
          birthday={customers[2].birthday}
          gender={customers[2].gender}
          job={customers[2].job}
        /> */}
      </div>
    );
  }
}
