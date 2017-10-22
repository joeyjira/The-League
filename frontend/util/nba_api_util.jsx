export const getTeams = () =>
    $.ajax({
        method: "GET",
        url: "api/nba_records/teams"
    });