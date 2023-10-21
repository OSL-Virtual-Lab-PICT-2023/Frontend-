import React,{useEffect,useState} from 'react'
import { apiUrl,filterData } from './FilterData'
import { toast } from "react-toastify";
import Spinner from './Spinner';
import axios from 'axios';
import Filter from './Filter';
import ContentTable from './ContentTable';


const Content = () => {
  const [featuredata,setfeaturedata]=useState([]);
  const[loading,setloading]=useState(true);
  const [category,setcategory]=useState(filterData[0].title);
  async function fetchdata(){
    setloading(true);
    try{
      const result = await axios.get(apiUrl);
      console.log(result.data);
      setfeaturedata(result.data.data);
    }
    catch(error){
    toast.error("Something went wrong");
    }
    setloading(false);
  }
  useEffect(()=>{
    fetchdata();
  },[]);
  return (
    <>
    <div className='Background'>
      <div className='Page'>
        <div className='mainpage'>
              <div className='Uppermost-mainpage'>
                <div className='Upper-header'>Recent Trends</div>
                <div className='Upper-body'>
                  <div className='Upper-body-text'>
                  The idea of virtual laboratory is to provide students a chance to perform experiments using the internet and visual aids without having the equipments at their end. The Virtual lab program presents a unique opportunity to boost the quality of engineering education, deepen understanding, and provide the necessary practical skills to young minds through cost effective outreach and distance learning activities.
                  </div>
                </div>
              </div>
              <div className='Upper-mainpage'>
                
                <div className='info'> 
                    <div className='info1'>
                      <div className='heading'>
                        About
                      </div>
                      <div className='writeup'>The idea of virtual laboratory is to provide students a chance to perform experiments using the internet and visual aids without having the equipments at their end. The Virtual lab program presents a unique opportunity to boost the quality of engineering education, deepen understanding, and provide the necessary practical skills to young minds through cost effective outreach and distance learning activities.                  
                      </div>
                    </div>
                    <div className='info1'>
                        <div className='heading'>
                          Objectives
                        </div>
                        <div className='writeup'>
                        Analysis and simulation of various components and devices to understand the basics of RF and microwave engineering.
                        </div>
                    </div>
                </div>
                <div className="main-content">
              
                          <div className='filterdata'>
                          <Filter filterData={filterData} category={category} setcategory={setcategory}></Filter>
                          
                          </div>
                          <div className="table-main">
                            {
                              loading ? (<Spinner></Spinner>):(<ContentTable setfeaturedata={setfeaturedata} featuredata={featuredata} category={category}></ContentTable>)
                            }
                          </div>
                </div>
              </div>  
              <div className='Lower-mainpage'>
                <div className='LongBar'>
                        <div className='contact'>
                            <div className='Lower-header'>
                              Contact Us
                            </div>
                            <div className='Lower-body'>
                              Phone No: 12345678
                              <br></br>
                              E-mail :  abcd123@gmail.com
                            </div>
                        </div>
                        <div className='Social-media'>
                          <div className='Lower-header'>
                                Follow Us
                              </div>
                              <div className='Lower-body'>
                                Phone No: 12345678
                                <br></br>
                                E-mail :  abcd123@gmail.com
                            </div>
                        </div>
                        <div className='links'>
                          <div className='Lower-header'>
                                Follow Us
                              </div>
                              <div className='Lower-body'>
                                Phone No: 12345678
                                <br></br>
                                E-mail :  abcd123@gmail.com
                            </div>

                        </div>
                </div>
              </div>

        </div>
      </div>        
    </div>
    </>
  )
}

export default Content