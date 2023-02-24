# Ticket Breakdown
We are a staffing company whose primary purpose is to book Agents at Shifts posted by Facilities on our platform. We're working on a new feature which will generate reports for our client Facilities containing info on how many hours each Agent worked in a given quarter by summing up every Shift they worked. Currently, this is how the process works:

- Data is saved in the database in the Facilities, Agents, and Shifts tables
- A function `getShiftsByFacility` is called with the Facility's id, returning all Shifts worked that quarter, including some metadata about the Agent assigned to each
- A function `generateReport` is then called with the list of Shifts. It converts them into a PDF which can be submitted by the Facility for compliance.

## You've been asked to work on a ticket. It reads:

**Currently, the id of each Agent on the reports we generate is their internal database id. We'd like to add the ability for Facilities to save their own custom ids for each Agent they work with and use that id when generating reports for them.**


Based on the information given, break this ticket down into 2-5 individual tickets to perform. Provide as much detail for each ticket as you can, including acceptance criteria, time/effort estimates, and implementation details. Feel free to make informed guesses about any unknown details - you can't guess "wrong".


You will be graded on the level of detail in each ticket, the clarity of the execution plan within and between tickets, and the intelligibility of your language. You don't need to be a native English speaker, but please proof-read your work.

## Your Breakdown Here

SubTicket # 1 - Migrating Agent Data Table (Migration step for DB skeleton) [EstimationTime: 5 min]

    Add new field called `custom_id` to agent table for each facility.

    Implementation Details
        - We have to write the db migration script based on each backend framework.
        - Executing the migration script using CLI.

SubTicket # 2 - Migrating Agent Data Table (Migration step for seeding) [EstimationTime: 10 min]

    Fill the `custom_id` field in the agent table for existing agent data.
    We have to make sure that each `custom_id` must be unique and related to the facility.

    Implementation Details
        - Write the migration script for seeding
        - Executing the migration script using CLI. ( same as above :) )

SubTicket # 3 - Refactoring `generateReport` function [EstimationTime: 10 min]
    For adding the ability to use the `custom_id` in the report.

    Guessing
        In the previous version the `generateReport` function will make report based on the shift metadata that is coming from the `getShiftsByFacility`.
        And the metadata may looks like; 
            { 
                uid: STRING,
                agent_id: uint256,  // this is internal database id
                ... ...
            }
        Then how does the `getShiftsByFacility` get the shifts array?
        Probably the answer is like below;
            o   There might be facility_id field in the shift table
            o   By using the facility_id `getShiftsByFacility` should group the shifts by using facility_id. (in the technical terms we are calling it as a group_by :) )
        But that is not a standard form.
        The goal of the ticket I was assigned is to make the db as a standard form.
        Just add the facility unique id as a `custom_id` to the agent table. 
        And that has been successfully done in the above tickets. :)
        The next step is to use the `custom_id` in the report.

    Implementation Details
        - Include the `custom_id` which is coming from the agent metadata in the shifts array to the report details.
        - Customize the export pdf stuff to add the new column `custom_id`.

That's all. Thanks for your reading my poor solution.
And apologize my unformal English skill. :)

