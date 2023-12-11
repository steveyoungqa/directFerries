Feature: Direct Ferries Automation Task
    As a user
    I want to visit the UK Home Page, Change languages, Login,
    Confirm booking and Sailing details

  Scenario Outline: Task 1 & 2
    Given I visit the Direct Ferries UK home page
    Then I navigate to the Special Offers page
    And I change the language of the site to "<language>"

    Examples: 
      | language |
      | France   |
      | Italia   |

  Scenario Outline: Task 3
    Given I visit the Direct Ferries UK My Account page
    Then I Login with Email "<email>" and Booking Ref of "<bookingRef>"
    Then the My Booking page has "2" passengers and "1" Vehicle for the Outboud Sailing
    And the My Booking page has "1" passengers and "1" Vehicle for the Return Sailing
    Then I navigate to the Outboud Sailing details page
    And the Vehicle is shown as "<vehicle>"
    And the Lead Passenger is "<passenger1>"
    Then I navigate to View Outboud Sailing Details
    And the Other Passenger is "<passenger2>"

    Examples: 
      | email                       | bookingRef   | passenger1     | passenger2     | vehicle    |
      | qatesting@directferries.com | DFP164826683 | TestOne TestRD | TestTwo TestRD | Abarth 500 |
