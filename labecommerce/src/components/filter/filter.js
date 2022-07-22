import FiltersContainer from "./StyledFilter";

export function Filters(props) {
  return <FiltersContainer>
      <input
        placeholder="Pesquisa"
        value={props.query}
        onChange={(ev) => props.setQuery(ev.target.value)}
      />

      <input
        type="number"
        placeholder="Preço mínimo"
        value={props.minPrice}
        onChange={(ev) => props.setMinPrice(ev.target.value)}
      />

      <input
        type="number"
        placeholder="Preço máximo"
        value={props.maxPrice}
        onChange={(ev) => props.setMaxPrice(ev.target.value)}
      />

      <span>
        <label htmlFo="sortingParameter">Ordenar por: </label>
        <select
          name="sortingParameter"
          value={props.sortingParameter}
          onChange={(ev) => props.setSortingParameter(ev.target.value)}
        >
          <option value="">Título</option>
          <option value="price">Preço</option>
        </select>
      </span>

      <select
        value={props.order}
        onChange={(ev) => props.setOrder(ev.target.value)}
      >
        <option value={"asc"}>Crescente</option>
        <option value={"desc"}>Decrescente</option>
      </select>
    </FiltersContainer>
  
}
export default Filters;
