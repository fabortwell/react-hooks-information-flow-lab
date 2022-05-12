function Filter({onCategoryChnage}) {
return (
    <select name="filter" onChange={onCategoryChnage}>
     <option value="All">Filter by category</option>
     <option value="Produce">Produce</option>
     <option value="Dairy">Dairy</option>
     <option value="Dessert">Dessert</option>
    </select>
)
}
export default Filter;