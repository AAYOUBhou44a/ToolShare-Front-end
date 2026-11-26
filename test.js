// const machineCard({status, title, onConsult}){
//     return (
//         <h1>title: {title}</h1>
//         <p>status: {status}</p>

//         <button onClick={onConsult}>Consulter</button>
//     )
// }


// // ex2:

// const [status, setStatus] = useState("Active");

// function handleChange() {
//     setStatus(prev => prev === "Active" ? "Arretée" : "Active");
// }

// return (
//     <h1>{status}</h1>
//     <button onClick={handleChange}>Changer le status</button>
// )

// // ex3:
// const [interventions, setInterventions] = useState([]);
// const [loading, setLoading] = useState(true);
// const [error, setError] = ("");

// useEffect(()=>{
//     try{
//         const response = axios.get("url");
//         setInterventions(response.data);
//     }catch(error){
//         setError(error);
//     }finally{
//         setLoading(false);
//     }
// },[])


// function app(){
//     if(loading){
//         return <h1>Chargement...</h1>
//     }
//     if(error){
//         return <h1>Erreur: {error}</h1>
//     }

//     return (
//         <div>
//             <ul>
//             interventions.map(intervention => (
//                 <div>
//                     <li key={intervention.id}>intervention.title</li>
//                 </div>
//             ))
//             </ul>
//         </div>
//     )


// }



// // ex3:
// function MachineLayout(){
//     <h1>Machines</h1>
//     <Outlet />

// }   

// function MachineList({links}){
//     return (
//         <div>
//             <ul>
//             links.map(link=>(
//                 <li>
//                     <Link to="${link.path}">
//                         link.title
//                     </Link>
//                 </li>
//             ))
//             </ul>
//         </div>
//     )
// }

// function MachineDetail(){
//     const id = useParams();
//     return <h1>machine.id? machine.</h1>
// }