# Decorator, Strategy, Factory and Builder Patterns
This repository has few examples of some of the design patterns

## Decorator
Please check the decorator.ts file
Decorator patterns is used for objects to have different options.
Good example of it would be Pizza. You have a plain pizza and you decorate it with different ingridients such as mushroom, green pepper, onions, pineapple (yuck), etc.
Each decorated will extend an abtract decorator class which itself implements pizza class. So decorator classes are themsels pizza.

Another option would be Tree. We have a christmass tree which means we pass our tree to different decorator classes and they will decorate it for us. Each decorator class will add one and only one feature to our object.

Other examples could be watch or neckless (decorate them with gold, silver, diamond, etc) or car (decorate them with options such as advance navigation system, sunroof, etc)

## Strategy Pattern:
Please check strategy.ts file
This pattern is used when you have different functionality for one particular task. For example, we have an item and that item has a price. But the price of that item could change from time to time. Either item is sold by including tax price into it, no tax, discounted price or duty free. All these prices could be different for one item. So we can either keep adding IF-ELSE to the price of the time (BAD CODE) or let the item know that another class is in charge if its calculation.

In this example, we have an iterface which has a method called calculatePrice. We also have an Item which has a price tag. However, the price tag of the item is not a number but it is a type of the interface we defined. Each time we want to change the price we just have to inject (by constructor or setter) the new price calculator to the item and each time user wants to check the price of the item it uses the related passed calculator for this.

It might be a good approach for different flow we will have in the Genesis

## Factory Pattern:
Please check factory.ts file
Factory pattern uses a method to return one or several possible classes which share a common super class at the runtime. We use this pattern when we do not know when and what object we need ahead of time. Plus we can totally encapsulate the whole object creation process. In our case, we can just call a SignUpFactory and that will return a sign up page for us.

## Builder Pattern