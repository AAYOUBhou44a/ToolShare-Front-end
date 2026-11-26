import [createContext, useContext] from "react";

const [filter, setFilter] = useState("All");

const FilterContext = createContext(null);

function FilterProvider(){
<FilterContext.Provider value={{filter, setFilter}} >
    <filterBar />
    <MachineList />

</FilterContext.Provider>
}

function filterBar(){
    const {filter, setFilter} = useContext(FilterContext);

    function handleFilter(e){
        setFilter(e.target.value);
    }

    <select id="filterSelect" onClick={e => setFilter(e.target.value)}>
        <option value="All"> All </option>
        <option value="Actives"> Actives </option>
    </select>
}

function MachineList(){
    const {filter} = useContext(FilterContext);
    const filteredMachines = filter === "All" ? machines : machines.filter(machine =>
        machine.status === "Active"
    )

    <ul>
        filteredMachines.map(machine =>(
            <li key={machine.id}>
                {machine.name}
            </li>
        ))
    </ul>
}