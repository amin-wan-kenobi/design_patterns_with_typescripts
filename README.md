# design_patterns_with_typescripts
This repository has few examples of some of the design patterns
Decorator Pattern:
Please check the decorator.ts file
Decorator patterns is used for objects to have different options.
Good example of it would be Pizza. You have a plain pizza and you decorate it with different ingridients such as mushroom, green pepper, onions, pineapple (yuck), etc.
Each decorated will extend an abtract decorator class which itself implements pizza class. So decorator classes are themsels pizza.

Another option would be Tree. We have a christmass tree which means we pass our tree to different decorator classes and they will decorate it for us. Each decorator class will add one and only one feature to our object.

Other examples could be watch or neckless (decorate them with gold, silver, diamond, etc) or car (decorate them with options such as advance navigation system, sunroof, etc)

# 
