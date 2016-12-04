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

        /* TODO: Write a test that loops through each feed
         * in the allFeeds object and ensures it has a URL defined
         * and that the URL is not empty.
         */

        it('url defined', function(){
          allFeeds.forEach(function(feed){
            //Makes sure the URL is defined
            expect(feed.url).toBeDefined();
            //Makes sure the URL is not empty
            expect(feed.url).not.toBe(0);
          });
        });


        /* TODO: Write a test that loops through each feed
         * in the allFeeds object and ensures it has a name defined
         * and that the name is not empty.
         */
         it('name defined', function(){
           allFeeds.forEach(function(feed){
             //Makes sure the name is defined
             expect(feed.name).toBeDefined();
             //Makes sure the name is not empty
             expect(feed.name).not.toBe(0);
           });
         });

    });


    /* TODO: Write a new test suite named "The menu" */
     describe('The Menu', function(){


        /* TODO: Write a test that ensures the menu element is
         * hidden by default. You'll have to analyze the HTML and
         * the CSS to determine how we're performing the
         * hiding/showing of the menu element.
         */
         it('hidden by default', function(){
           //Makes sure the menu is hidden by default
          expect($('body').hasClass('menu-hidden')).toBe(true);
         });

         /* TODO: Write a test that ensures the menu changes
          * visibility when the menu icon is clicked. This test
          * should have two expectations: does the menu display when
          * clicked and does it hide when clicked again.
          */
          it('toggle visibilty on click', function(){
            //When the menu icon is clicked, it makes sure that the class that makes it hidden is removed
            $('.menu-icon-link').click();
            expect($('body').hasClass('menu-hidden')).toBe(false);
            //When the same menu icon is clicked again, it makes sure that the class that makes the menu hidden is added back
            $('.menu-icon-link').click();
            expect($('body').hasClass('menu-hidden')).toBe(true);
          });
        });

    /* TODO: Write a new test suite named "Initial Entries" */
    describe('Initial Entries', function(){

        /* TODO: Write a test that ensures when the loadFeed
         * function is called and completes its work, there is at least
         * a single .entry element within the .feed container.
         * Remember, loadFeed() is asynchronous so this test will require
         * the use of Jasmine's beforeEach and asynchronous done() function.
         */
         beforeEach(function(done){
           //Signals when the asyn function loadFeed has completed and its ok to run the test to see if there is at least one entry element within the feed container
           loadFeed(0, function(){
             done();
           });
         });
         it('at least one entry in the feed container', function(done){
           //There should be at least one entry
           expect($('.entry').length).toBeGreaterThan(0);
           //Call done after the tests
           done();
         });
 });

    /* TODO: Write a new test suite named "New Feed Selection"*/
    describe('New Feed Selection', function(){

        /* TODO: Write a test that ensures when a new feed is loaded
         * by the loadFeed function that the content actually changes.
         * Remember, loadFeed() is asynchronous.
         */
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
