
@tariff
Feature: Title of your feature
  I want to use this template for my feature file

   @tariffmain
  Scenario Outline: Main
    Given The User is in Telecom Page
    And The user click on add tariff plan
    When the user fill all the details"<monthlyrental>","<freelocal>","<freeinternational>","<freesms>","<localcharge>","<internationalcharges>","<smscharges>"
    And click on submit button
    Then the user is displayed as congratulation you add tariff plan
    
     Examples:
      | monthlyrental  | freelocal | freeinternational |freesms|localcharge|internationalcharges|smscharges|
      | 500          | 1500      | 100       | 50     | 2  | 12        |  1    |       
      | 401          | 1250     | 150      | 100     | 3  | 15        |  2    |       

@subtariff @tariffmain
       Scenario: Sub
    Given The User is in Telecom Page
    And The user click on add tariff plan
    When the user fill all details in list
     |601|1750|150|60|2|12|5|  
      And click on submit button
    Then the user is displayed as congratulation you add tariff plan
 