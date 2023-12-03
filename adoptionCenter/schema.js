import mongoose from "mongoose";
const adoptionCenterSchema = new mongoose.Schema({
                                          name: String,
                                          address: {
                                              street: String,
                                              city: String,
                                              zipcode: String,
                                          },
                                          contactInfo: String,
                                          centerType: String,
                                          operatingHours: {
                                              monday: String,
                                              tuesday: String,
                                              wednesday: String,
                                              thursday: String,
                                              friday: String,
                                              saturday: String,
                                              sunday: String,
                                          },
                                          website: String,
                                          centerDescription: String,
                                      });
export default adoptionCenterSchema;