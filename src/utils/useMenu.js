import {useState,useEffect} from 'react'
import { useParams } from 'react-router-dom';

const url='https://corsproxy.io/?https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=17.385044&lng=78.486671&restaurantId=';

const useMenu = () => {
    const [itemList, setItemList] = useState(null);
    const [restaurantData, setRestaurantData] = useState({});
    const {resId}=useParams();
    async function getMenuOfRestaurant(){
      const data=await fetch(`${url}${resId}`);
      const json = await data.json();
      setRestaurantData(json?.data?.cards[0].card.card.info );
      const groupedCard=json.data.cards.filter((card)=> card.hasOwnProperty('groupedCard'))[0];
      const menuList=groupedCard.groupedCard.cardGroupMap.REGULAR.cards;
      setItemList(menuList);
    }
    
    useEffect(()=>{
     getMenuOfRestaurant();
    },[]);

  return {itemList,restaurantData};
}

export default useMenu;