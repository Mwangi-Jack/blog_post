function countTimeFrom(dateString) {
	// Parse the provided date string into a Date object
	const givenDate = new Date(dateString);

	// Get the current date
	const currentDate = new Date();

	// Calculate the difference in time (milliseconds)
	const differenceInTime = currentDate - givenDate;

	// Convert the difference to days
	const differenceInDays = Math.floor(differenceInTime / (1000 * 60 * 60 * 24));

	if (differenceInDays >= 1) {
	  return `${differenceInDays} day${differenceInDays === 1 ? '' : 's'} ago`;
	}

	// If less than a day, convert the difference to hours
	const differenceInHours = Math.floor(differenceInTime / (1000 * 60 * 60));

	if (differenceInHours >= 1) {
	  return `${differenceInHours} hour${differenceInHours === 1 ? '' : 's'} ago`;
	}

	// If less than an hour, convert the difference to minutes
	const differenceInMinutes = Math.floor(differenceInTime / (1000 * 60));

	if (differenceInMinutes >= 1) {
	  return `${differenceInMinutes} minute${differenceInMinutes === 1 ? '' : 's'} ago`;
	}

	// If less than a minute, return "just now"
	return 'Just now';
  }

  // Example usage:
//   const timePassed = countTimeFrom('2024-09-25T11:30:00.000Z');
//   console.log(`Time passed: ${timePassed}`);


  export default countTimeFrom;
