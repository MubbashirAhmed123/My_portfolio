
import { faHtml5,faCss3,faJs,faReact,faNode } from '@fortawesome/free-brands-svg-icons'
import {faDatabase} from '@fortawesome/free-solid-svg-icons'

import turf from '../assets/turf.png'
import warehouse from '../assets/warehouse.png'
import task from '../assets/taskmanager.png'
import train from '../assets/train.png'
import banking from '../assets/bankingsystem.png'




export const skills=[
    
    {
        skillName:'JavaScript',
        percentage:80,
        icon:faJs,
        color:'#f0db4f'
    },
    {
        skillName:'React JS',
        percentage:50,
        icon:faReact,
        color:'#61dbfb'
    },
    {
        skillName:'Node JS/Express Js',
        percentage:50,
        icon:faNode,
        color:'#68a063'
    },
   
    {
        skillName:'MySQL',
        icon:faDatabase,
        color:'#29111'

    },
    {
        skillName:'Mongo Db',
        icon:faDatabase,
        color:'#29111'

    },
    {
        skillName:'HTML',
        percentage:95,
        icon:faHtml5,
        color:'#e34c26'
    },
    {
        skillName:'CSS / TailWind CSS',
        percentage:90,
        icon:faCss3,
        color:'#264de4'

    },
    
]

export const degree=[
    {
        degreeName:'Bachelor of Engineering',
        collegeName:'PDA College Of Enginerring',
        degreeYear:'2020-2024',
        marks:'7.9 CGPA'
    },
    {
        degreeName:'Pre University Education',
        collegeName:'Al Sharay PU College',
        degreeYear:'2019-2020',
        marks:'93.67 %'
    },
    {
        degreeName:'SSLC',
        collegeName:'Human Age Gulshan -e- Atfal',
        degreeYear:'2018-2019',
        marks:'81.12 %'
    }
]


export const projects=[
    {
        projectId:1,
       projectImg:turf,
       projectTitle:'Turf Booking Application',
       projectDesc:'Created a dynamic Turf Booking web application to simplify the reservation process for turf playgrounds.The app has an easy-to-use interface that allows users to book and manage their reservations. Allows users to book the turf by entering their details such as name, phone number, and the desired date.Users can check their booked slots by simply entering their phone number.Provides a comprehensive view of all booked slots, enabling users to see available and occupied time slots.',
       tech:'React.js,Redux Toolkit,Express.js,MongoDB,Tailwind CSS',
       preview:'https://turf-booking-app.vercel.app'

    },
    {
        projectId:2,
        projectImg:warehouse,
        projectTitle:'Ware House Management System',
        projectDesc:' Software system used to manage the inward and outward movement of goods in a warehouse.The goods are stored in a rented warehouse, and owners pay for the storage time period.The manual process of warehouse management is automated using a QR Code-based application.',
        tech:'React.js,Express.js,JWT,MySQL,Tailwind CSS',
 
     },
     {
        projectId:3,
        projectImg:task,
        projectTitle:'Task Manager',
        projectDesc:'This project is a task management application similar to Trello, allowing users to create, update, and manage tasks within different columns. It includes drag-and-drop functionality for tasks and user authentication, including Google login.',
        tech:'React.js,Express.js,JWT,MongoDB,Tailwind CSS',
 
     },
     {
        projectId:4,
        projectImg:train,
        projectTitle:'Ticket Generation Using Voice',
        projectDesc:'Software that allows the user to generate a train ticket using just their voice.The system records the customer’s information, including the origin, destination, and date of travel, via voice.',
        tech:'ReactJS,NodeJS/ExpressJS,MySQL'
    },
    {
        projectId:5,
        projectImg:banking,
        projectTitle:'Online Banking System',
        projectDesc:'Online baking systems perform basic operations like creating accounts, logging,transfer money,and withdrawing money, balance check, and logout are all options.',
        tech:'HTML/Tailwind CCS,JavaScript,PHP,MySQL'
    },
   
    
]

