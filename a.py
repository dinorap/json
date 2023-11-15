import json

def filter_and_write_json(input_file, output_file, target_category_id):
 
    with open(input_file, 'r') as file:
       
        data = json.loads(file.read())

    if "quiz" in data:
      
        quiz_data = data["quiz"]

        
        filtered_data = [item for item in quiz_data if isinstance(item, dict) and item.get("category_id") == target_category_id]

        with open(output_file, 'w') as file:
            json.dump(filtered_data, file, indent=2)
        print(f"Dữ liệu đã lọc được ghi vào file {output_file}.")
    else:
        print("Không tìm thấy trường 'quiz' trong file.")


input_json_file = 'Topic1.json'
output_json_file = 'c.json'
target_category_id = 3


filter_and_write_json(input_json_file, output_json_file, target_category_id)
