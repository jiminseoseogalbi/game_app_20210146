function Game({name,picture}){
  return(
    <div>
      <h2>I like {name}</h2>
      <img src={picture} />
    </div>
  );
}

const gameILike = [
  {
    name: 'Minecraft',
    image: 'https://img.poki.com/cdn-cgi/image/quality=78,width=600,height=600,fit=cover,f=auto/12a0ed7c6bc09b73d6558c6f69ed7f5f.png'
  },
  {
    name: 'Genshin Impact',
    image: 'https://cdn1.epicgames.com/salesEvent/salesEvent/EGS_GenshinImpact_miHoYoLimited_S2_1200x1600-c12cdcc2cac330df2185aa58c508e820'
  },
  {
    name: 'Epic seven',
    image: 'https://static.smilegatemegaport.com/event/live/epic7/brand/v2/images/en/img_share_630.jpg'
  },
  {
    name: 'Guardian tales',
    image: 'https://guiasteam.com/wp-content/uploads/2021/10/Guardian-Tales-Tier-List.jpg'
  },
  {
    name: 'Lost ark',
    image: 'http://www.sisajournal-e.com/news/photo/202102/229669_93768_5416.png'
  }
];

function App() {
  return (
    <div>
      {gameILike.map(dish => <Game key={dish.name} name ={dish.name} picture ={dish.image}/>)}
    </div>
  );
}

export default App;
