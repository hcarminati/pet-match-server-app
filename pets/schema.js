import mongoose from "mongoose";
const avaliablePetSchema = new mongoose.Schema({ originalId: String,
                                          age: String,
                                          name: String,
                                          attributes: [{
                                              declawed: Boolean,
                                              house_trained: Boolean,
                                              shots_current: Boolean,
                                              spayed_neutered: Boolean,
                                              special_needs: Boolean,
                                          }],
                                          breeds: {
                                              primary: String,
                                              secondary: String,
                                              mixed: Boolean,
                                              unknown: Boolean
                                          },
                                          coat: String,
                                          gender: String,
                                          size: String,
                                          colors: {
                                              primary: String,
                                              secondary: String,
                                              tertiary: String
                                          },
                                          description: String,
                                          status: String,
                                          primary_photo_cropped: {
                                              full: String,
                                              large: String,
                                              medium: String,
                                              small: String
                                          },
                                          photos: [{
                                              small: String,
                                              medium: String,
                                              large: String,
                                              full: String
                                          }],
                                          published_at: Date,
                                          tags:[String],
                                          type: String,
                                          uploader: String,
                                      });
export default avaliablePetSchema;