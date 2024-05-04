import "./App.css";
import Card from "./components/Card";

function App ()
{
  const cardData = [
    { title: "Card 1", description: "This is card 1" },                                      
    { title: "Card 2", description: "This is card 2" },                                                                         
    { title: "Card 3", description: "This is card 3" },
    ]
  return <div className="App">
    {cardData.map((card, index) => (
      <Card key={index} title={card.title} description={card.description} />
    ))}
  </div>;
}

export default App;
