/*
 * Finds the given element on the DOM and injects 
 * the HTML into the innerHTML of the element
 * 
 * string - any HTML to be inserted into the given element
 * sectionName - the ID of the element to inject the HTML into
 */
injectHTMLString = (stringHTML, elementID) => {
  let section = document.getElementById(`${elementID}`);
  section.innerHTML = stringHTML;
};

createLeadershipSlide = fetch('../shared/leadership-slide.html')
    .then((response) => response.text())
    .then((stringHTML) => injectHTMLString(stringHTML, 'leadership-section'));
    
createHostSlide = fetch('../shared/host-slide.html')
.then((response) => response.text())
.then((stringHTML) => injectHTMLString(stringHTML, 'host-section'));

createSponsorSlide = fetch('../shared/sponsor-slide.html')
.then((response) => response.text())
.then((stringHTML) => injectHTMLString(stringHTML, 'sponsor-section'));

