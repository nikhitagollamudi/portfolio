import { FaRegFileCode } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { FaDatabase } from "react-icons/fa";
import { SiNumpy } from "react-icons/si";
import { VscVscodeInsiders } from "react-icons/vsc";
export const SkillsList=[
    
    {
        _id:1,
        name:'Programming Languages',
        items:'Python , Java , C++ , C',
        icon: <FaRegFileCode/>

    },
    {
        _id:2,
        name:'Web Development Technologies',
        items:'JavaScript, HTML, CSS, Bootstrap, React.JS , Angular, Node.JS,SpringBoot, Django',
        icon: <FaReact/>

    },
    {
        _id:3,
        name:'Data Management',
        items:'SQL, MySQL, MongoDB, PostgreSQL',
        icon: <FaDatabase/>

    },
    {
        _id:4,
        name:'Libraries and Frameworks',
        items:'pandas, NumPy, Matplotlib, scikit-learn, TensorFlow, Seaborn,Keras, OpenCV, Flask',
        icon: <SiNumpy/>

    },
    {
        _id:5,
        name:'Developer Tools',
        items:'Google Cloud Platform, VS Code, PyCharm, Anaconda,Windows, Eclipse, Unix, Android Studio, MySQL Workbench,Git, GitHub, Docker, Postman',
        icon: <VscVscodeInsiders/>

    }
]