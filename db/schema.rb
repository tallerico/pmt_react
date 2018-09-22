# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2018_09_21_182414) do

  create_table "product_properties", force: :cascade do |t|
    t.string "value"
    t.integer "properties_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["properties_id"], name: "index_product_properties_on_properties_id"
  end

  create_table "products", force: :cascade do |t|
    t.string "name"
    t.string "upc"
    t.datetime "available_on"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "properties", force: :cascade do |t|
    t.string "name"
    t.integer "products_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["products_id"], name: "index_properties_on_products_id"
  end

end
