# PLUNGE

###### What is PLUNGE?

[PLUNGE](https://briehn.github.io/plunge/) is an adventure-style RPG game playable within the browser. Stuck in the depths of nowhere, players must venture off into the unknown: discovering treasure, hunting enemies, and exploring the land.

## Background

An adventure-style RPG game consists of a player who is represented with a character model. Players will be able to move within a map to explore it. Within the map, there will be objects players can interact with. Objects include, but are not limited to:

- **Treasure Chests:** Randomly placed treasure chests are available throughout a players adventure. Within these treasure chests, players have the opportunity to obtain items to aid them in their adventure.
- **Enemies:** Static objects that may, in the future, begin to move. Until then, when interacting with these stand-still NPCs (Non-Playable Characters), (not implemented) they will start the combat phase of the game; where players will battle it out with the enemy. Upon victory, enemies have a chance to provide a reward to the player. Upon defeat...try not to lose.
- **Decorations, placeholder objects, obstacles:** Throughout a players journey, they may encounter trees, rocks, new terrain, etc. These objects are not interactable and are just implemented to fill the map with more objects.

Players will be able to keep track of the goodies they've collected via the Inventory section of the main screen. The inventory is a grid that will hold all the items the players have collected. Players will be able to interact with the grid to view the item and use it, if useable.

The combat system of PLUNGE revolves around keystrokes. Players must input a set amount of keys to attack enemies or to defend from enemy attacks. Failure to type in any key strokes after a certain time results in a skipped turn, allowing the enemy to retaliate.

## Functionality & MVPs

In PLUNGE, users will be able to:

1. Use the arrow keys to move around a grid-like map that will randomly generate objects with each iteration.
   ![Map Interaction](./src/assets/readme/map_interaction.gif)

   - Every time a new game has started, objects are randomly placed throughout the map. Placement is based off of current objects placed per type. After placing the first object of its type, the next object of the same type will be generated dependent on several things. First, a comparison of the current count of objects AND the max amount of objects that is set. Second, a random number generated. Lastly, a boundary is set on each object that takes form as a rectangular-shape around each object. Objects of the same type cannot be placed within said rectangle.

   ```js
   withinBoundaries(currentItem, locations, dx, dy) {
        let within = false;
        let cI = currentItem.i
        Object.values(locations).forEach((coords) => {
            let focus = coords.i;
            let lowestBound = ((focus - dx) - (this.rows * dy))
            for (let j = 0; j < (dy * 2); j++) {
                let leftBound = lowestBound + (j * this.rows);
                let rightBound = leftBound + (dx * 2);
                if (cI > leftBound && cI < rightBound) {
                    within = true;
                }
            }
        })
        return within;
    }
   ```

2. Interact with objects placed in the map to add new items into their inventory or (not implemented) enter combat with an enemy object.

   ![Item Interaction](./src/assets/readme/item_interaction.gif)

3. Interact with a grid-like inventory to use and view items within.

   ![Inventory Interaction](./src/assets/readme/inventory.gif)

4. (Not Implemented) When in combat, enter keystrokes matching the ones required to successfully attack enemies or defend from enemy attacks.

In addition, this project will include:

1. An instruction section for the main screen and combat phase, explaining how to play and what each section does.
2. A README file (you are here!)

## Wireframe

Homepage

![Homepage](https://i.imgur.com/tKDZAnc.png)

Combat System (Not Currently Implemented)

![Combat Page](https://i.imgur.com/0YDwxgs.png)

## Technologies, Libraries, APIs:

- **Javascript:** The main language for this project. Will handle combat, movement, and inventory manipulation.
- **Canvas API:** This project will utilize Canvas to generate the grid-like map object, player/enemy models, and the inventory.
- **Webpack:** Webpack will be used as the compiler.
- **npm:** NPM is used to manage the project.

## Implementation Timeline

1. **Friday Afternoon & Weekend**
   - Initial Project Setup
   - Research APIs
   - Collect sprites and/or images that will be utilized
   - Begin home page foundation
2. **Monday** (MAP MONDAY)
   - Continue home page setup (if not completed)
   - Implement grid-like map
   - Implement player model into grid-like map
   - Begin map movement (updating upon player reaching border)
3. **Tuesday** (TAKE 2 TUESDAY)
   - Continue map movement (if not completed)
   - Integrate player movement
   - Add objects into grid-like map
   - Implement enemy model into grid-like map
   - Begin combat screen
4. **Wedneday** (WEEPING WEDNESDAY)
   - Continue combat screen
   - Implement grid-like inventory
   - Integrate inventory manipulation
5. **Thursday Morning** (TROUBLESOME THURSDAY)
   - Pray everything is done before this day.
   - **Deploy the unit!**
