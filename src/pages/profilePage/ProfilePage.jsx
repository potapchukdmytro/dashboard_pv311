import React, {useContext} from "react";
import {
    Box,
    Avatar,
    Typography,
    Button,
    Card,
    CardContent,
    CardActions,
    Stack,
    Divider, useTheme,
} from "@mui/material";
import { styled } from "@mui/system";
import {AuthContext} from "../../components/providers/AuthProvider";
import {defaultAvatarUrl} from "../../settings/urls";

const ProfilePage = () => {
    const { auth } = useContext(AuthContext);

    const theme = useTheme();

    const ProfileCard = styled(Card)(() => ({
        maxWidth: 400,
        margin: "auto",
        borderRadius: theme.spacing(2),
        boxShadow: theme.shadows[3],
        padding: theme.spacing(2),
        backgroundColor: theme.palette.background.paper,
    }));

    return (
        <ProfileCard>
            <CardContent>
                <Stack direction="column" alignItems="center" spacing={2}>
                    <Avatar
                        src={auth.image ? auth.image : defaultAvatarUrl}
                        alt={`${auth.firstName} ${auth.lastName}'s avatar`}
                        sx={{ width: 100, height: 100 }}
                    />
                    <Typography variant="h5" component="div" fontWeight="bold">
                        {auth.firstName} {auth.lastName}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {auth.email}
                    </Typography>
                    <Divider sx={{ width: "100%", marginY: 2 }} />
                </Stack>
            </CardContent>
            <CardActions>
                <Box width="100%" display="flex" justifyContent="center">
                    <Button variant="contained" color="primary" sx={{ mx: 1 }}>
                        Follow
                    </Button>
                    <Button variant="outlined" color="primary" sx={{ mx: 1 }}>
                        Message
                    </Button>
                </Box>
            </CardActions>
        </ProfileCard>
    );
};

export default ProfilePage;