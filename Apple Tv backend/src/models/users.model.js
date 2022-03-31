const mongoose = require("mongoose");

const userSchema = new mongoose.Schema (
    {  
        

           "LatestOriginals":[{
            movie_image:{type:String, required:true},
            movie_categories:{type:String, required:true},
            movie_title:{type:String, required:true},
            movie_description:{type:String, required:true},
            } ],
            
            "WatchEnitreSeasons":[
                {
                    movie_image:{type:String, required:true},
                }
            ],
            "ComingSoons":[
                {
                    movie_image:{type:String, required:true},
                }
            ],
            "ErieTales":[
                {
                    movie_image:{type:String, required:true},
                }
            ],
            "StoriesFromAroundTheGlobe":[
                {
                    movie_image:{type:String, required:true},
                }
            ],
            "FindingTheirVoice":[
                {
                    movie_image:{type:String, required:true},
                }
            ],
            "ExtraordinaryPeople":[
                {
                    movie_image:{type:String, required:true},
                    movie_categories:{type:String, required:true},
                    movie_title:{type:String, required:true},
                    movie_description:{type:String, required:true},
                }
            ],
            "CreaturesAndCritters":[
                {
                    movie_image:{type:String, required:true},
                }
            ],
            "AllDramaSeries":[
                {
                    movie_image:{type:String, required:true},
                }
            ],
            "AllFeatureFilms":[
                {
                    movie_image:{type:String, required:true},
                }
            ],
            "AllComdeySeries":[
                {
                    movie_image:{type:String, required:true},
                }
            ],
            "OurAmazingPlanet":[
                {
                    movie_image:{type:String, required:true},
                }
            ],
            "AllNonfictionSeries":[
                {
                    movie_image:{type:String, required:true},
                }
            ],
            "KidsandFamily":[
                {
                    movie_image:{type:String, required:true},
                }
            ],
            "FunforAll":[
                {
                    movie_image:{type:String, required:true},
                }
            ],
            "Inspirations":[
                {
                    movie_image:{type:String, required:true},
                }
            ],


        
     
    },
    {
        versionKey:false,
    }
);

const User = mongoose.model("user",userSchema)
module.exports = User;