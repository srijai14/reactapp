import * as React from 'react';
import './Card.css';
import { AiFillRightCircle } from "react-icons/ai";
import dayjs from 'dayjs';
import { DemoContainer, DemoItem } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
const Card =() =>{
    const [value, setValue] = React.useState(dayjs('2022-04-05'));
    return(
      <>
       <div className="container-fluid">
          <div className="row">
              <div className="col-sm-6">
              <div className="card" >
                <div className="row g-0">
                <div className="col-md-4">
                    <img src="https://img.freepik.com/premium-photo/concept-nature-reserve-conserve-wildlife-reserve-tiger-deer-global-warming-food-loaf-ecology-human-hands-protecting-wild-wild-animals-tigers-deer-trees-hands-green-background-sun-light_34998-486.jpg?w=1380" className="img-fluid rounded-start" alt="..." />
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                    <h5 className="card-title">World Environment Day</h5>
                    <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus pariatur necessitatibus</p>
                    <p className="card-text1"><small className="text-body-secondary">June 5</small><span><AiFillRightCircle /></span></p>
                    </div>
                </div>
                </div>
            </div>

            <div className="card" >
                <div className="row g-0">
                <div className="col-md-4">
                    <img src="https://as2.ftcdn.net/v2/jpg/02/03/90/45/1000_F_203904566_H1gFMwiBZwHBj6oki1DWJH0aGeXjSe3Z.jpg" className="img-fluid rounded-start" alt="..." />
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                    <h5 className="card-title">Father's Day</h5>
                    <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus pariatur necessitatibus</p>
                    <p className="card-text1"><small className="text-body-secondary">June 19</small><span><AiFillRightCircle /></span></p>
                    </div>
                </div>
                </div>
            </div>

            <div className="card" >
                <div className="row g-0">
                <div className="col-md-4">
                    <img src="https://as1.ftcdn.net/v2/jpg/04/36/97/14/1000_F_436971422_AxExMysYVhxZXSMOXFVpW2zvH7iXcFmc.jpg" className="img-fluid rounded-start" alt="..." />
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                    <h5 className="card-title">International Yoga Day</h5>
                    <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus pariatur necessitatibus</p>
                    <p className="card-text1"><small className="text-body-secondary">June 21</small><span><AiFillRightCircle /></span></p>
                    </div>
                </div>
                </div>
            </div>

            <div className="card" >
                <div className="row g-0">
                <div className="col-md-4">
                    <img src="https://img.freepik.com/free-vector/eid-mubarak-religious-islamic-festival-background-design_1055-17462.jpg?w=826&t=st=1684747212~exp=1684747812~hmac=15bdddc303bc6a77a747550d6e92cc9d2e58e7665510982ea9afc12932972296" className="img-fluid rounded-start" alt="..." />
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                    <h5 className="card-title">Bakrid/Eid ul-Adha</h5>
                    <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus pariatur necessitatibus</p>
                    <p className="card-text1"><small className="text-body-secondary">June 28</small><span><AiFillRightCircle /></span></p>
                    </div>
                </div>
                </div>
            </div>

            <div className="card" >
                <div className="row g-0">
                <div className="col-md-4">
                    <img src="https://as1.ftcdn.net/v2/jpg/05/95/27/60/1000_F_595276030_o7zHw1lJof9hEOfxvh7FqXrik8blfptm.jpg" className="img-fluid rounded-start" alt="..." />
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                    <h5 className="card-title">World Chocolate Day</h5>
                    <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus pariatur necessitatibus</p>
                    <p className="card-text1"><small className="text-body-secondary">June 30</small><span><AiFillRightCircle /></span></p>
                    </div>
                </div>
                </div>
            </div>
              </div>
              <div className="col-sm-6">
                <div className='calender'>
              <LocalizationProvider dateAdapter={AdapterDayjs} >
                <DemoContainer components={['DateCalendar', 'DateCalendar']}>
                <DemoItem>
                <DateCalendar value={value} onChange={(newValue) => setValue(newValue)} />
                </DemoItem>
                </DemoContainer>
              </LocalizationProvider>
              </div>
              </div>
          </div>
       </div>
      </> 
     )
}

export default Card;