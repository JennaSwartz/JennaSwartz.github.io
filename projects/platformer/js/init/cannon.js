(function (window) {
    'use strict';
    window.opspark = window.opspark || {};
    window.opspark.collectable = window.opspark.collectable || {};
    let cannon = window.opspark.cannon;
    
    /**
     * init: Initialize all cannons.
     * 
     * Add as many cannons as necessary (at least 3) to make your level challenging. 
     *
     * The following functions are available to you:
     *  cannon.create.onTop(xLocation);
     *  cannon.create.onBottom(xLocation);
     *  cannon.create.onLeft(yLocation);
     *  cannon.create.onRight(yLocation);
     */ 
    cannon.init = function (game) {
        ////////////////////////////////////////////////////////////////////////
        // ALL YOUR CODE GOES BELOW HERE ///////////////////////////////////////
        
        // example: 
        cannon.create.onTop(200, 900);
        cannon.create.onLeft(400);
        cannon.create.onBottom(600, 400);
        cannon.create.onBottom(700)
        cannon.create.onBottom(710)
        cannon.create.onBottom(720)
        cannon.create.onBottom(730)
        cannon.create.onBottom(740)
        cannon.create.onBottom(750)
        cannon.create.onBottom(760)
        
        
        
        
        // ALL YOUR CODE GOES ABOVE HERE ///////////////////////////////////////
        ////////////////////////////////////////////////////////////////////////
    };
})(window);
