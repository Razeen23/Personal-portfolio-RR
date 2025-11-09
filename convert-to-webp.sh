#!/bin/bash

# Script to convert all PNG, JPG, JPEG images to WebP format
# Requires: cwebp (install with: brew install webp on macOS)

echo "Converting images to WebP format..."

# Function to convert image to webp
convert_to_webp() {
    local file="$1"
    local dir=$(dirname "$file")
    local filename=$(basename "$file")
    local name="${filename%.*}"
    local ext="${filename##*.}"
    
    # Skip if already webp
    if [ "$ext" = "webp" ]; then
        return
    fi
    
    # Convert to webp
    if command -v cwebp &> /dev/null; then
        cwebp -q 80 "$file" -o "$dir/$name.webp" && echo "Converted: $file -> $dir/$name.webp"
    else
        echo "Error: cwebp not found. Install with: brew install webp"
        exit 1
    fi
}

# Convert images in src/assets
find src/assets -type f \( -name "*.png" -o -name "*.jpg" -o -name "*.jpeg" \) ! -name ".DS_Store" | while read file; do
    # Skip favicon files
    if [[ "$file" == *"favicon"* ]] || [[ "$file" == *"android-chrome"* ]] || [[ "$file" == *"apple-touch-icon"* ]]; then
        echo "Skipping favicon: $file"
        continue
    fi
    convert_to_webp "$file"
done

# Convert images in src/assets2
find src/assets2 -type f \( -name "*.png" -o -name "*.jpg" -o -name "*.jpeg" \) ! -name ".DS_Store" | while read file; do
    convert_to_webp "$file"
done

# Convert images in src/assets/tech
find src/assets/tech -type f \( -name "*.png" -o -name "*.jpg" -o -name "*.jpeg" \) ! -name ".DS_Store" | while read file; do
    convert_to_webp "$file"
done

echo "Conversion complete!"

