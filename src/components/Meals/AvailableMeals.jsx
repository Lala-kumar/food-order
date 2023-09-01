import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";
import classes from "./AvailableMeals.module.css";
import { useEffect, useState } from "react";

const AvailableMeals = () => {
  const [meals, setMeals] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMeals = async () => {
      setIsLoading(true);
      setError(null);
      try {
        const response = await fetch(
          "https://food-http-bcedf-default-rtdb.asia-southeast1.firebasedatabase.app/meals.json"
        );
        if (!response.ok) {
          throw new Error("Request failed!");
        }
        const data = await response.json();
        const loadedMeals = [];

        for (const key in data) {
          loadedMeals.push({
            id: key,
            name: data[key].name,
            description: data[key].description,
            price: data[key].price,
          });
        }
        setMeals(loadedMeals);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
        setError(error.message);
      }
      setIsLoading(false);
    };
    fetchMeals();
  }, []);

  const mealsList = meals.map((meal) => (
    <MealItem
      id={meal.id}
      key={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));

  console.log(mealsList);
  console.log(mealsList);
  let content = <li>Found no movies.</li>;

  if (mealsList.length > 0) {
    content = mealsList;
  }
  if (error) {
    content = <li>{error}</li>;
  }
  if (isLoading) {
    content = <li>Loading...</li>;
  }

  return (
    <section className={classes.meals}>
      <Card>
        <ul> {content} </ul>
        {/* <ul>{!isLoading && error && <p>{error}</p>}</ul>
        <ul>{!isLoading && mealsList.length > 0 && mealsList}</ul>
        <ul>
          {!isLoading && mealsList.length === 0 && !error && (
            <p>Found no Meals</p>
          )}
        </ul>
        <ul>{isLoading && <p>Loading..</p>}</ul> */}
      </Card>
    </section>
  );
};

export default AvailableMeals;
