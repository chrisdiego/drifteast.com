##remove the old build folder
rm -rf build/
##make a fresh build
npm run build

##upload the build solder to the s3 bucket using mango profile, with public read permissions
aws s3 sync --profile=mango build/ s3://drifteast.com --acl public-read

##remove the build folder again
rm -rf build/
##notify user that the bucket has been updated
echo "Page deployed to: http://drifteast.com.s3-website-us-east-1.amazonaws.com"