function FilterBar({ search, setSearch, brand, setBrand, type, setType }) {
  return (
    <div style={{ marginBottom: "20px", display: "flex", gap: "10px" }}>
      
      {/* Search */}
      <input
        type="text"
        placeholder="Search cars..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {/* Brand Filter */}
      <select value={brand} onChange={(e) => setBrand(e.target.value)}>
        <option value="">All Brands</option>
        <option value="Audi">Audi</option>
        <option value="BMW">BMW</option>
        <option value="Tesla">Tesla</option>
        <option value="Ferrari">Ferrari</option>
      </select>

      {/* Type Filter */}
      <select value={type} onChange={(e) => setType(e.target.value)}>
        <option value="">All Types</option>
        <option value="Supercar">Supercar</option>
        <option value="Sports">Sports</option>
        <option value="Sedan">Sedan</option>
        <option value="Electric">Electric</option>
      </select>

    </div>
  );
}

export default FilterBar;