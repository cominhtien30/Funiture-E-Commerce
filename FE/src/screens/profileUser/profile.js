// @flow
import React, { useEffect, useState, useRef } from 'react'
import styles from './profile.style'
import { withTheme } from '@material-ui/core/styles'
import authService from '../../utils/AuthService'
import ProgressBar from '../../commons/processBar/progressBar'
import {
    Button,
    Typography,
    Grid,
    TextField,
    Avatar,
    FormControlLabel,
    Switch,
    InputBase,
} from '@material-ui/core'
// service
import DataGridOrder from '../../component/user/profile/dataGrid'
import { Element } from 'react-scroll'
import { validateEmail } from '../../utils/validation'

const Profile = ({
    theme,
    requestProfile,
    updateProfile,
    bill,
    requestBill,
}) => {
    //kiểm tra mail ,mặc định là true vì khi register đã bắt buộc nhập mail
    const isEmail = useRef(true)
    //toggole swich edit
    const [isEdit, setIsEdit] = useState(false)
    const [user, setUser] = useState({})
    const [progress, setProgress] = useState(0)
    //biến này sử dụng cho load ảnh tạm thời
    const [userAvatar, setAvatarUser] = useState(null)

    const onGetSuccess = (profile) => {
        setUser(profile)
        setAvatarUser(profile.avatar)
    }
    useEffect(() => {
        //khi requesProfile thay doi thi dispatch no
        if (authService.isLogin() && authService.getAccount()) {
            //kiem tra login
            //sau đó truyền vào cái tài khoản cần update, và 1 funtion khi thành công thì set State vào
            requestProfile(authService.getAccount(), onGetSuccess)
            requestBill()
        }
    }, [requestProfile])
    //  requestProfile(authService.getAccount())
    // requestProfile, getProfile
    const classes = styles()
    // styles row image
    const onChangeHanlde = (event) => {
        const { value, name } = event.target
        // trong swich case biến tạo biến var mới được
        switch (name) {
            //nếu là ảnh thì chạy progress bar sau đó load ảnh lên element
            case 'avatar':
                var avt = window.URL.createObjectURL(
                    event.target.files[0],
                )
                //xử lý progress bar
                var onProgress = new Promise((resolve) => {
                    var interval = setInterval(() => {
                        setProgress((prev) => {
                            if (prev >= 100) {
                                clearInterval(interval)
                                resolve()
                                return 0
                            } else {
                                return prev + 8
                            }
                        })
                    }, 80)
                })
                //when distroy progress bar then set avt
                onProgress.then(() => {
                    setUser({
                        ...user,
                        [name]: event.target.files[0],
                    })
                    setAvatarUser(avt)
                })
                break
            case 'email':
                //nếu là emain thì kiểm tra
                isEmail.current = validateEmail(value)

                setUser({
                    ...user,
                    [name]: value,
                })
                break
            default:
                setUser({
                    ...user,
                    [name]: value,
                })
                break
        }
    }
    console.log(isEmail.current, 'current')
    // handle submit
    const submitHandle = (e) => {
        e.preventDefault()
        //check main
        if (isEmail.current) {
            //nếu mail đúng thì tạo form data add hết vào
            const formData = new FormData()
            let { avatar, ...fieldUser } = user // tác field avatar riêng
            const newUser = [
                'password',
                'type',
                'createdAt',
                'updatedAt',
            ]
            newUser.forEach((e) => delete fieldUser[e]) //xóa field ko cần update
            formData.append('avatarUser', avatar)
            //add form
            Object.keys(fieldUser).forEach((nameField) => {
                formData.append(nameField, fieldUser[nameField])
            })
            //set switch tắt
            setIsEdit(false)
            //gửi thông tin vào action updateProfile
            updateProfile(formData)
        }
    }
    return (
        <>
            <div
                className={`${classes.root} container-profile width-layout mt-4 mb-4`}
            >
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <Typography variant="caption" gutterBottom>
                            My Profile
                        </Typography>
                        <div className="d-flex align-item-center justify-content-center mt-5">
                            <Avatar
                                src={userAvatar}
                                style={{
                                    color: 'white',
                                    backgroundColor:
                                        theme.palette.primary.main,
                                    width: '80px',
                                    height: '80px',
                                }}
                            >
                                N
                            </Avatar>
                        </div>
                        <form
                            onSubmit={submitHandle}
                            className="d-flex justify-content-center align-items-center"
                        >
                            <div className="d-flex flex-wrap">
                                <div className="mt-4 w-100">
                                    <InputBase
                                        className={classes.inputFile}
                                        placeholder="Search Google Maps"
                                        type="file"
                                        name="avatar"
                                        inputProps={{
                                            'aria-label':
                                                'search google maps',
                                        }}
                                        onChange={onChangeHanlde}
                                    />
                                </div>
                                <div className="row w-100">
                                    {progress !== 0 ? (
                                        <ProgressBar
                                            progress={progress}
                                        />
                                    ) : (
                                        ''
                                    )}
                                </div>

                                <TextField
                                    fullWidth
                                    id="standard-basic"
                                    value={user?.fullname}
                                    onChange={onChangeHanlde}
                                    name="fullname"
                                    margin="normal"
                                    disabled={!isEdit}
                                />
                                <TextField
                                    fullWidth
                                    id="standard-basic"
                                    value={user?.account}
                                    margin="normal"
                                    disabled
                                    name="fullname"
                                    onChange={onChangeHanlde}
                                />
                                <TextField
                                    fullWidth
                                    id="standard-basic"
                                    value={user?.email}
                                    margin="normal"
                                    placeholder="Email Lien He"
                                    name="email"
                                    error={
                                        !isEmail.current
                                            ? true
                                            : false
                                    }
                                    helperText={
                                        !isEmail.current
                                            ? 'is not Email'
                                            : ''
                                    }
                                    onChange={onChangeHanlde}
                                />
                                <TextField
                                    fullWidth
                                    id="standard-basic"
                                    placeholder="Address"
                                    value={user?.address}
                                    disabled={!isEdit}
                                    onChange={onChangeHanlde}
                                    name="address"
                                    margin="normal"
                                />
                                <TextField
                                    fullWidth
                                    id="standard-basic"
                                    placeholder="Phone"
                                    value={user?.phone}
                                    disabled={!isEdit}
                                    margin="normal"
                                    name="phone"
                                    onChange={onChangeHanlde}
                                />

                                <FormControlLabel
                                    control={
                                        <Switch
                                            checked={isEdit}
                                            onChange={() =>
                                                setIsEdit(!isEdit)
                                            }
                                            color="primary"
                                            name="checkedA"
                                            inputProps={{
                                                'aria-label':
                                                    'secondary checkbox',
                                            }}
                                        />
                                    }
                                    label="You Want To Edit ?"
                                />
                                <Button
                                    fullWidth
                                    disabled={!isEdit}
                                    type="submit"
                                    style={{
                                        margin: '12px auto',
                                    }}
                                >
                                    Accept
                                </Button>
                            </div>
                        </form>
                    </Grid>
                    <Grid item xs={12}>
                        <Typography variant="caption" gutterBottom>
                            Order
                        </Typography>
                        <Element name="scroll-to-order">
                            <DataGridOrder bill={bill} />
                        </Element>
                    </Grid>
                </Grid>
            </div>
        </>
    )
}
export default withTheme(Profile)
