RHI Survey Torso Editor
=======================

Few notes:

1. Should scale dynamically to the size of #torso-container, except that the sliders will be in the wrong place then so you'll have to restyle the form.

2. The "min," "max," and "value" attrs on the three range inputs are actually pixel values of the width of each of those parts on the shape. (value being default). That means when you submit the form you'll get values like 300/200/250, which you'll have to normalize to a ratio.

3. If I got the vertical ratio between the upper body and lower body wrong, you can change it on line 28 of the JS file.
