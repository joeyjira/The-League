require 'net/http'
require 'json'

class Api::NbaRecordController < ApplicationController
    def initialize
        response = Net::HTTP.get(URI('http://data.nba.net/10s/prod/v1/today.json'))
        parsed_links = JSON.parse("#{response}")
        @links = parsed_links["links"]
    end

    def teams
        team_link = @links["teams"]
        teams = JSON.parse("#{Net::HTTP.get(URI("http://data.nba.net#{team_link}"))}")
        parsed_teams = teams["league"]["standard"]
        render(
            json: parsed_teams
        )
    end
    
    def standings
        standings_link = @links["leagueConfStandings"]
        standings = JSON.parse("#{Net::HTTP.get(URI("http://data.nba.net#{standings_link}"))}")
        parsed_standings = standings["league"]["standard"]["conference"]
        render(
            json: parsed_standings
        )
    end
end
