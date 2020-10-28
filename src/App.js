import Card from "./components/Card";

import items from "./data.json";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div style={{ marginTop: "20rem" }}>
          {items.map(item => (
            <Card
              key={item.id}
              logo={item.logo}
              company={item.company}
              isNew={item.new}
              featured={item.featured}
              position={item.position}
              postedAt={item.postedAt}
              contract={item.contract}
              location={item.location}

            />
          ))}
        </div>
      </header>
    </div>
  );
}

export default App;
