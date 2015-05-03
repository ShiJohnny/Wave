angular.module("faqCtrl",[] )
    .controller('FaqCtrl' , [ '$scope' , function($scope) {





        var f1 = {
            title: "What and who is Wave Transit?",
            info :"Wave Transit is a local government agency that operates under the" +
            " oversight of the Cape Fear Public Transportation Authority. Although members " +
            "of the Authority are appointed by the Wilmington City Council and the New Hanover County " +
            "Board of Commissioners, the authority and Wave Transit are separate from both the city and county" +
            ". Click here for a list of authority members. The Cape Fear Public Transportation Authority typically " +
            "meets on the fourth Thursday of each month at noon in the Wave Transit Board Room at Forden Station, 505" +
            " Cando St. Wilmington.  The meetings are open to the public and a portion of the meeting is dedicated to" +
            " receiving public comment. Click here for meeting dates, minutes and agendas."
        };
        var f2 =
        {
            title:"Does Wave Transit Charter Buses and Trolleys?"
            ,info: "Wave Transit cannot provide charter service according to Federal Transit Administration " +
        "(FTA) 49 Code of Federal Regulations (CFR), Part 604. The only allowable exception to providing charter service is to serve governmental entities if a request meets the conditions of 49 CFR, Part 604 (b) – Part 604.6. Click here for the authority's charter bus policy."
        };


        var f3 =
        {
            title:"How do I apply for Paratransit (van) Transportation?"
            ,info:"Wave Transit operates a paratransit program for individuals who otherwise cannot use our regular fixed route buses. Click here for information regarding eligibility or to complete an application for paratransit service"
        };



        var f5=
            {
                title:"Why doesn't Wave Transit provide more benches and shelters at bus stops?"
                ,info:"Wave Transit provides passenger amenities (benches, shelters, and waste receptacles) at bus stop" +
            " locations that have demonstrated high ridership or meet the criteria for amenities that are compliant" +
            " with the Americans with Disabilities Act (ADA) of 1990. It would be ideal to have a bench and/or shelter " +
            "at all bus stop locations in our service area, but unfortunately, there are many obstacles which prevent this " +
            "from happening:"+
             " When installing a bench or shelter, a bus stop must have " +
            "an adjacent sidewalk, crosswalk, and curb cut to the location. Many " +
            "of the right-of-way locations in the City of Wilmington and New Hanover County" +
            " do not provide sidewalks and connectivity alongside roadways, preventing Wave Transit" +
            " from installing any amenities at these locations."+
           +     "Wave Transit does not own right-of-ways (ROW's) along roadways. ROW's are owned " +
            "by the City of Wilmington or the North Carolina Department of Transportation (NCDOT)." +
            " Prior to installing an amenity, Wave Transit must have approval of encroachment from the " +
            "respective owner for installation of both a concrete pad and amenity. Often times, this involves working " +
            "with many departments within the city and NCDOT, and the process can be very lengthy depending on the l" +
            "ogistics involved."+
           + "Wave Transit purchases benches and shelters using available funds for these items. While we st" +
            "rive to make funds available for these amenities, we must seek amenity funding through grants and other" +
            " sources. Wave Transit has been proactive in securing shelter/bench locations throughout the area. We " +
            "also have an amenities program that works with local businesses to donate a portion of their property " +
            "behind a nearby sidewalk and behind the ROW line at a given location for placement of a bench or shelter, " +
            "thus circumventing the process of obtaining a ROW encroachment. We encourage interested parties to contact " +
            "us regarding the program if you would like to be a partner with Wave Transit to provide locations for benches " +
            "and shelters within our service area."
    };

var f6=
{
    title:"Does Wave Transit offer transportation for medical and employment purposes?"
    ,info:"Wave Transit provides transportation for applicants who apply for medical and employment transportation through the Department of Social Services (DSS); click here for information on contacting DSS."
};

var f7 =
{
    title:"How can I make a compliment or complaint about Wave Transit?"
    ,info:"At Wave Transit, we are always looking for ways to improve our service. We greatly appreciate all feedback received from passengers, visitors, and anyone who wants to let us know how we are doing. We have e-forms on our website that let you file a compliment or complaint with us, and we will get back to you at the method of communication noted on the form. Click here to access the forms. You may complete the form online and it goes directly to our customer service mailbox, where the event will be investigated and responded to within 21 days. Many complaints will receive immediate feedback within 24 hours; however, complaints that require more information may take up to 21 days to process."
};


var f8 =
{
    title:"Why do UNC-Wilmington students and faculty ride without paying a fare, while community college and other school students have to pay half fare?"
    ,info:"UNC Wilmington contracts with Wave Transit to provide public transportation services on and immediately around the UNCW campus. Students pay for the service through their fees to the university. Wave Transit offers half fare to community college and grade school students to promote ridership and introduce students to the benefits of public transportation."
};


var f9 =
{
    title:"Can anyone ride the UNC Wilmington Seahawk shuttles?"
    ,info:"The UNCW Seahawk Shuttles are public transportation routes open to anyone regardless of their relationship with the university. Non UNCW students will be asked to pay regular Wave Transit fare when riding the Seahawk Shuttle."
};
var f10 =
{
    title:"Are Wave buses ADA/wheelchair accessible and contain bike racks?"
    ,info: "All Wave Transit vehicles are compliant with the Americans with Disabilities Act (ADA) for wheelchair and other mobility challenged passengers. All Wave Transit fixed route vehicles also have bicycle racks. And of course, bikes ride free!"
};
var f11 =
{
    title:"What is a transfer and how much does it cost?"
    ,info:"Some Wave Transit destinations may require travel by more than one bus. Wave does not charge for the first transfer during a one way trip; however, if a passenger requires more than one transfer during a one way trip, another fare is required. Please ask your driver for a transfer when boarding the bus to receive a free transfer for the next bus you plan to board.  Transfers are not provided for travel to and from Pleasure Island on Route 301."
};


    $scope.question = [f1,f2,f3,f5,f6,f7,f8,f9,f10,f11];



        $scope.reveal = (
            function(item)
            {

                if (item.show == true)
                {
                    item.show = false;
                }
                else
                    item.show = true;
                return item.show;
            }


        );








    }]);