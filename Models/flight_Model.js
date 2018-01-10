var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var flightSchema = new Schema({
  outbound: {
    flights: {
      departs_at: {
        type: Date,
        required: true
      },
      arrives_at: {
        type: Date,
        required: true
      },
      origin: {
        airport: {
          type: String,
          required: true
        },
        terminal: Number
      },
      destination: {
        airport: {
          type: String,
          required: true
        },
        terminal: Number
      },
      operating_airline: String,
      flight_number: Number,
      aircraft: String,
      booking_info: {
        travel_class: {
          type: String,
          required: true,
          enum: ["Economy", "Business"],
          default: "Economy"
        },

        seats_remaining: Number
      }
    },
    fare: {
      total_price: {
        type: Number,
        required: true
      },
      price_per_adult: {
        total_fare_flight: {
          type: Number,
          required: true
        },
        tax: Number
      },
      flight_cancellation: {
        refundable: Boolean,
        cancel_penalties: Boolean,
        cancel_charge: { type: Number, default: 2500 }
      },
      go_cancellation: {
        refundable: Boolean,
        cancel_penalties: Boolean,
        cancel_charge: {
          type: Number,
          default: 300
        }
      }
    }
  },

  booking_id: {
    type: Number,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  vas: {
    coupon_used: Boolean,
    coupon_code: String,
    food: {
      type: Boolean,
      default: false
    },
    food_category: {
      type: String,
      enum: ["Vegetarian", "Non-Vegetarian"],
      default: "Vegetarian"
    },
    pickup_and_drop: {
      type: Boolean,
      default: false
    },
    insurance: {
      type: Boolean,
      default: false
    }
  },

  status: {
    type: String,
    enum: ["Scheduled", "Cancelled"],
    default: "Scheduled"
  },
  gross_total: Number,
  alternate_email: {
    type: String
  },
  alternate_mobile: {
    type: Number
  }
});
//other email (if any)
