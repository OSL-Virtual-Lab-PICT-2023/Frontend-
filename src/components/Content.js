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
                <div className='Upper-header'>Recent Trends In OS</div>
                <div className='Upper-body'>
                  <div className='Upper-body-text'>
                  The idea of virtual laboratory is to provide students a chance to perform experiments using the internet and visual aids without having the equipments at their end. The Virtual lab program presents a unique opportunity to boost the quality of engineering education, deepen understanding, and provide the necessary practical skills to young minds through cost effective outreach and distance learning activities.
                  </div>
                </div>
              </div>
              <div className='Upper-mainpage'>
                
                <div className='info'> 
                    <div className='Video'>
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/krzXKGKM0hg?si=3kz0a8EnGCAMMGIC" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                    </div>
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
                        The idea of virtual laboratory is to provide students a chance to perform experiments using the internet and visual aids without having the equipments at their end. The Virtual lab program presents a unique opportunity to boost the quality of engineering education, deepen understanding, and provide the necessary practical skills to young minds through cost effective outreach and distance learning activities.
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
              
              <div className='Other-resources'>
                    <div className='heading'>Other Important Resources</div>
                    <div className='textbody'>
                    <img src='dot.png'></img><a href="https://www.geeksforgeeks.org/last-minute-notes-operating-systems/">Last Minute Notes – Operating Systems</a>
                    </div>
                    <div className='textbody'>
                    <img src='dot.png'></img><a href="https://drive.uqu.edu.sa/_/mskhayat/files/MySubjects/2017SS%20Operating%20Systems/Abraham%20Silberschatz-Operating%20System%20Concepts%20(9th,2012_12).pdf">Operating System Concepts</a>
                    </div>
                    <div className='textbody'>
                    <img src='dot.png'></img><a href="https://www.geeksforgeeks.org/operating-systems-interview-questions/">Top 100 Operating System Interview Questions</a>
                    </div>
                    <div className='textbody'>
                    <img src='dot.png'></img><a href="https://www.youtube.com/playlist?list=PLxCzCOWd7aiGz9donHRrE9I3Mwn6XdP8p">Videos</a>
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
                        <div className='Social-media'>
                          <div className='Lower-header'>
                                Follow Us
                              </div>
                              <div className='Lower-body'>
                                <a href='https://www.linkedin.com/school/pune-institute-of-computer-technology/'><img src='Linkedin.webp'></img></a>
                                <a href='https://www.instagram.com/pict.pune/'><img src='insta.webp'></img></a>
                                <a href='https://twitter.com/PunePict'><img src='x.webp'></img></a>
                                <a href='https://www.facebook.com/PICTOfficial'><img src='fb.webp'></img></a>
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