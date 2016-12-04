/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    /* This is our first test suite - a test suite just contains
    * a related set of tests. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */
    describe('RSS Feeds', function() {
        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty. Experiment with this before you get started on
         * the rest of this project. What happens when you change
         * allFeeds in app.js to be an empty array and refresh the
         * page?
         */
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });
        //Test to ensure each feed in the allFeeds object has a url defined adn is not empty
        it('url defined', function(){
          allFeeds.forEach(function(feed){
            //Makes sure the URL is defined
            expect(feed.url).toBeDefined();
            //Makes sure the URL is not empty
            expect(feed.url.length).not.toBe(0);
          });
        });
         //Test to ensure each feed in the allFeeds object has a name defined adn is not empty
         it('name defined', function(){
           allFeeds.forEach(function(feed){
             //Makes sure the name is defined
             expect(feed.name).toBeDefined();
             //Makes sure the name is not empty
             expect(feed.name.length).not.toBe(0);
           });
         });
    });
     describe('The Menu', function(){
         //Test to ensure the meny is hidden by default
         it('hidden by default', function(){
           //Makes sure the menu has the class menu-hidden
          expect($('body').hasClass('menu-hidden')).toBe(true);
         });
          //Test to ensure the menu toggles visibilty when clicked. It should display when clicked, and hide when clicked again
          it('toggle visibilty on click', function(){
            //When the menu icon is clicked, it makes sure that the class that makes it hidden is removed
            $('.menu-icon-link').click();
            expect($('body').hasClass('menu-hidden')).toBe(false);
            //When the same menu icon is clicked again, it makes sure that the class that makes the menu hidden is added back
            $('.menu-icon-link').click();
            expect($('body').hasClass('menu-hidden')).toBe(true);
          });
        });
    //Test to ensure when the loadFeed function is called there is at least one .entry element in the feed container
    describe('Initial Entries', function(){
         beforeEach(function(done){
           //Signals when the asyn function loadFeed has completed and its ok to run the test to see if there is at least one entry element within the feed container
           loadFeed(0, function(){
             done();
           });
         });
         it('at least one entry in the feed container', function(done){
           //There should be at least one entry
           expect($('.feed .entry').length).toBeGreaterThan(0);
           //Call done after the tests
           done();
         });
 });
    //Test to ensure that when new feed is loaded by loadFeed function the content actually changes
    describe('New Feed Selection', function(){
         //declare the variables I will use to hold the feed
         var entry1,
         entry2;
         beforeEach(function(done){
           //Signals when the asyn function loadFeed has completed and its ok to run the test
           loadFeed(0, function(){
             //Holds the value of the first entry
             entry1 = $('.feed').html();
             done();
           });
         });
         it('loadFeed content changes', function(done){
           //Now we need to compare the value of the second entry to the first
           loadFeed(1, function(){
             //Holds the value of the second entry
             entry2 = $('.feed').html();
             //Compares the value of the seond to the first to make sure they are not the same
             expect(entry2).not.toEqual(entry1);
             done();
         })
       });
    });
}());
