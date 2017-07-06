	             $(document).ready(function() {
	                 var maxHeight = 0; // Initialize to zero
	                 var $setboxHeight = $('.packages-column-header'); // Cache to improve performance
	                 $setboxHeight.each(function() { // Loop over all the elements having class example
	                     // Get the max height of elements and save in maxHeight variable
	                     maxHeight = ($(this).outerHeight()) > maxHeight ? ($(this).outerHeight()) : maxHeight;
	                 });
	                 $('.packages-column-header').height(maxHeight); // Set max height to all example elements
	             });