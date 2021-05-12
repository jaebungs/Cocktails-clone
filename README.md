# Better Cocktail App
Better version of MymyCocktail App. 
Plan to add more features, and change according to good practices.

# Thoughts I had 
1. Redux or Context API?
    I could manange state like Redux with Context API by placing on top of components. Any consumers of this context will re-render any time the context is changed. We can prevent this by memonizing.
    But! I'm going to use Redux. 
2. Put CSS file in a same folder with component for easy maintenance.